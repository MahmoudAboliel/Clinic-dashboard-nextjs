
interface ResTypeProps {
    styles: string;
}
const ReservationsType = ({ styles }: ResTypeProps) => {

    const reservationsTypes = [
        {
          type: 'Previous',
          styles: 'bg-(--bg-d-blue) text-(--c-d-blue)'
        },
        {
          type: 'Immediate',
          styles: 'bg-(--bg-l-blue) text-(--c-l-blue)'
        },
        {
          type: 'Emergency',
          styles: 'bg-(--bg-red) text-(--c-red)'
        },
      ];

    return (
        <div className="grid grid-cols-3 gap-2 my-4 pt-5">
        {reservationsTypes.map(res => 
            <span key={res.type} className={`${res.styles} ${styles} text-sm sm:text-xl text-center border p-2 font-semibold rounded-md`}>
            {res.type}
            </span>
        )}
        </div>
    );
}

export default ReservationsType;