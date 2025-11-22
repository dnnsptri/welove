"use client";

import { useState, useEffect, useRef } from "react";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface UploadModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const UploadModal = ({ open, onOpenChange }: UploadModalProps) => {
  const [documentationFiles, setDocumentationFiles] = useState<File[]>([]);
  const [policyFiles, setPolicyFiles] = useState<File[]>([]);
  const [message, setMessage] = useState<{ type: 'success' | 'error' | null; text: string }>({ type: null, text: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleOpenChange = (isOpen: boolean) => {
    onOpenChange(isOpen);
    if (!isOpen) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setDocumentationFiles([]);
      setPolicyFiles([]);
      setMessage({ type: null, text: '' });
      setIsSubmitting(false);
      setIsSent(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage({ type: null, text: '' });

    if (documentationFiles.length === 0 && policyFiles.length === 0) {
      setMessage({ type: 'error', text: 'Selecteer ten minste één bestand.' });
      return;
    }

    setIsSubmitting(true);

    try {
      const allFiles = [...documentationFiles, ...policyFiles];
      
      // Create FormData to send files
      const formData = new FormData();
      allFiles.forEach((file) => {
        formData.append('files', file);
      });

      // Send files to API
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Upload mislukt');
      }

      setIsSubmitting(false);
      setIsSent(true);
      setMessage({ type: 'success', text: 'Bestand(en) succesvol verzonden.' });
      
      // Reset button text after 3 seconds
      timeoutRef.current = setTimeout(() => {
        setIsSent(false);
        setDocumentationFiles([]);
        setPolicyFiles([]);
        setMessage({ type: null, text: '' });
        timeoutRef.current = null;
      }, 3000);
    } catch (error) {
      setIsSubmitting(false);
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'Er is een fout opgetreden bij het uploaden van de bestanden.';
      setMessage({ type: 'error', text: errorMessage });
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md p-0 border-0">
        <DialogTitle className="sr-only">Upload veilig jouw polis</DialogTitle>
        <DialogDescription className="sr-only">
          Upload veilig jouw polis
        </DialogDescription>
        <Card className="border p-0 shadow-lg">
          <div className="bg-muted/50 rounded-2xl border p-6">
            <div className="mb-6 text-center">
              <div className="mb-2 flex items-center justify-center gap-4">
                <span className="text-2xl font-bold">Upload veilig jouw polis</span>
              </div>
              <p className="text-muted-foreground text-sm">
                PDF, PNG of JPG bestanden zijn toegestaan
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-3">
                <div className="relative">
                  <input
                    id="documentation-upload"
                    type="file"
                    accept=".pdf,.png,.jpg,.jpeg,.doc,.docx"
                    multiple
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        const files = Array.from(e.target.files);
                        setDocumentationFiles(files);
                        setMessage({ type: null, text: '' });
                      }
                    }}
                  />
                  <Button variant="outline" size="lg" type="button" className="w-full border-0 rounded-[2px] hover:bg-transparent hover:text-current hover:scale-100 hover:shadow-sm" asChild>
                    <label htmlFor="documentation-upload" className="cursor-pointer flex items-center justify-center">
                      {documentationFiles.length > 0 
                        ? documentationFiles.map(f => f.name).join(', ')
                        : <span className="text-muted-foreground">Kies bestand</span>}
                    </label>
                  </Button>
                </div>
                <div className="relative">
                  <input
                    id="file-upload"
                    type="file"
                    accept=".pdf,.png,.jpg,.jpeg,.doc,.docx"
                    multiple
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        const files = Array.from(e.target.files);
                        setPolicyFiles(files);
                        setMessage({ type: null, text: '' });
                      }
                    }}
                  />
                  <Button 
                    type="submit"
                    size="lg" 
                    className="w-full bg-[#3CB2D0] text-white hover:bg-[#286F81] flex items-center justify-center border-0"
                    disabled={isSubmitting || isSent}
                  >
                    <Upload className="mr-2 h-5 w-5" />
                    {isSent ? 'Bestand(en) verstuurd' : isSubmitting ? 'Verzenden...' : 'Verstuur bestand(en)'}
                  </Button>
                </div>
              </div>
              <div className="mt-4 text-center">
                {message.type ? (
                  <p className={`text-xs ${
                    message.type === 'success' 
                      ? 'text-green-600 dark:text-green-400' 
                      : 'text-red-600 dark:text-red-400'
                  }`}>
                    {message.text}
                  </p>
                ) : (
                  <p className="text-muted-foreground text-xs">
                    Zorg ervoor dat jouw naam is verwerkt in de bestandsnaam.
                  </p>
                )}
              </div>
            </form>
          </div>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export { UploadModal };

