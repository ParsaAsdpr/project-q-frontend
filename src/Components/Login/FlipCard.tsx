import "./FlipCard.css";

interface Props {
  Front: React.ReactNode;
  Back: React.ReactNode;
  isFlipped: boolean;
}

const FlipCard = ({ Back, Front, isFlipped }: Props) => {
  return (
    <div
      className={`flip-card-container relative h-full w-full sm:w-[60%] md:w-[48%] lg:w-[36%] xl:w-[30%] 2xl:w-[23%] translate-y-1/2`}
    >
      <div
        className={`flip-card w-full h-full absolute ${isFlipped && "flipped"}`}
        
      >
        <section className="front">{Front}</section>
        <section className="back">{Back}</section>
      </div>
    </div>
  );
};

export default FlipCard;
