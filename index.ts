export const resizeImage = (
    file: File,
    maxWidth: number,
    quality: number = 1,
    callback: (result: string | Blob | null, error?: string | null) => void
  ): void => {
    const reader = new FileReader();
  
    reader.onload = (event: ProgressEvent<FileReader>) => {
      const img = new Image();
      img.src = event.target?.result as string;
  
      img.onload = () => {
        const canvas = document.createElement("canvas");
        let width = maxWidth;
        let height;
  
        if (img.width > maxWidth) {
          height = (width / img.width) * img.height;
        } else {
          width = img.width;
          height = img.height;
        }
  
        canvas.width = width;
        canvas.height = height;
  
        const ctx = canvas.getContext("2d");
  
        if (!ctx) {
          callback(null, "Canvas context not supported");
          return;
        }
  
        ctx.drawImage(img, 0, 0, width, height);
  
        if (file.type === "image/svg+xml") {
          const svgDataUri = `data:image/svg+xml;base64,${btoa(event.target?.result as string)}`;
          callback(svgDataUri);
        } else {
          canvas.toBlob(
            (blob) => {
              callback(blob);
            },
            file.type,
            quality
          );
        }
      };
  
      img.onerror = (error) => {
        callback(null, `Image loading error: ${error}`);
      };
    };
  
    reader.readAsDataURL(file);
  };
  
