
const PreparingItem = ({PreparingItem}) => {
    const {recipe_name, preparing_time, calories} = PreparingItem;
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table my-2">
    
    <tbody className="text-base text-[#878787] text-left">
      {/* row 1 */}
      <tr className="bg-[#28282808]">
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td></td>
        <td>{calories}</td>
        <td></td>
        <td></td>
    
      </tr>
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default PreparingItem;