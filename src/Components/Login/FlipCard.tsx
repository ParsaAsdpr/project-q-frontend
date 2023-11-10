import "./FlipCard.css";

interface Props {
  Front: React.ReactNode;
  Back: React.ReactNode;
  isFlipped: boolean;
}

const FlipCard = ({ Back, Front, isFlipped }: Props) => {
  return (
    <div
      className={`flip-card-container relative w-[22%] bg-red-700`}
    >
      <div
        className={`flip-card w-full h-full absolute bg-red-600 ${isFlipped && "flipped"}`}
        
      >
        <section className="front">{Front}</section>
        <section className="back">{Back}</section>
      </div>
    </div>
  );
};

export default FlipCard;
