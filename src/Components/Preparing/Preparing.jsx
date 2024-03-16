import PreparingItem from "../PreparingItem/PreparingItem";

const Preparing = ({preparedItem}) => {
    return (
        <div className="border-[#28282833] border-2 p-5 rounded-lg text-center">
            <h2 className="text-2xl font-semibold">Currently Cooking: {preparedItem.length} </h2>
            <table className="table">
                {/* head */}
    <thead className="text-base text-[#878787] text-left">
      <tr>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
            </table>
            {
        preparedItem.map((item,idx) => <PreparingItem key={idx} 
            PreparingItem={item}></PreparingItem>)
    }

        </div>
    );
};

export default Preparing;