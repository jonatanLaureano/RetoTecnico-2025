type ResultCardProps = {
    item: {
      title: string;
      description: string;
      media_type: string;
      href: string;
    };
  };
  
  export default function ResultCard({ item }: ResultCardProps) {
    return (
      <div className="result-card">
        <h2>{item.title}</h2>
        {item.media_type === "image" && <img src={item.href} alt={item.title} />}
        {item.media_type === "video" && <video controls src={item.href}></video>}
        {item.media_type === "audio" && <audio controls src={item.href}></audio>}
        <p>{item.description}</p>
      </div>
    );
  }
  