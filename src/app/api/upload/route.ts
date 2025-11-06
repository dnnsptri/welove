import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const files = formData.getAll('files');
    
    if (!files || files.length === 0) {
      return NextResponse.json(
        { error: 'Geen bestanden ontvangen' },
        { status: 400 }
      );
    }

    // Validate file types
    const allowedTypes = ['application/pdf', 'image/png', 'image/jpeg', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const fileNames: string[] = [];
    
    for (const file of files) {
      if (file instanceof File) {
        if (!allowedTypes.includes(file.type)) {
          return NextResponse.json(
            { error: 'Een of meer bestanden hebben een ongeldig bestandstype' },
            { status: 400 }
          );
        }
        fileNames.push(file.name);
      }
    }

    if (fileNames.length === 0) {
      return NextResponse.json(
        { error: 'Geen geldige bestanden ontvangen' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save files to cloud storage (S3, etc.)
    // 2. Store metadata in database
    // 3. Send email notification
    // For now, we'll just return success
    
    return NextResponse.json({
      success: true,
      message: 'Bestanden succesvol ontvangen',
      files: fileNames,
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Er is een fout opgetreden bij het uploaden van de bestanden' },
      { status: 500 }
    );
  }
}

