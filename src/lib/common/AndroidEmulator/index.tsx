import { checkIframe } from 'src/utils/html';

interface IAndroidEmulatorProps {
  url: string;
}

const AndroidEmulator = (props: IAndroidEmulatorProps) => {
  const { url } = props;

  if (checkIframe()) return null;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: 380,
          height: 640,
          padding: 24,
          background: '#000',
          borderRadius: 30,
          boxShadow: '2px 2px 4px 0px #000',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: 12,
            height: 12,
            background: '#666',
            borderRadius: '50%',
            position: 'absolute',
            top: 8,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />
        <div
          style={{
            width: '100%',
            height: '100%',
            background: '#fff',
            borderRadius: 20,
            overflow: 'hidden',
          }}
        >
          <iframe
            src={url}
            title="App Screen"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AndroidEmulator;
