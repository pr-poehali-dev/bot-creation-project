import { useEffect, useState } from 'react';
import QRCodeLib from 'qrcode';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const QRCode = () => {
  const [url] = useState('https://bot-creation-project--preview.poehali.dev/');
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const generateQR = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const dataUrl = await QRCodeLib.toDataURL(url, {
          width: 400,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          }
        });
        setQrDataUrl(dataUrl);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ошибка генерации QR-кода');
        setIsLoading(false);
      }
    };
    
    generateQR();
  }, [url]);

  const downloadQRCode = () => {
    if (qrDataUrl) {
      const link = document.createElement('a');
      link.download = 'qr-code.png';
      link.href = qrDataUrl;
      link.click();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">QR-код сайта</h1>
        <p className="text-center text-gray-600 mb-8">Отсканируйте для перехода</p>
        
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
            <p className="font-semibold">Ошибка:</p>
            <p>{error}</p>
          </div>
        )}
        
        <div className="flex justify-center mb-8 bg-white p-6 rounded-xl shadow-inner">
          {isLoading && <p className="text-gray-500">Загрузка...</p>}
          {qrDataUrl && <img src={qrDataUrl} alt="QR код" className="max-w-full h-auto" />}
        </div>
        
        <div className="text-center mb-6">
          <p className="text-sm text-gray-500 mb-1">Ссылка:</p>
          <p className="text-blue-600 font-mono text-sm break-all">{url}</p>
        </div>

        <Button 
          onClick={downloadQRCode} 
          className="w-full bg-blue-600 hover:bg-blue-700"
          size="lg"
          disabled={isLoading || !!error}
        >
          <Icon name="Download" size={20} className="mr-2" />
          Скачать QR-код
        </Button>
      </div>
    </div>
  );
};

export default QRCode;