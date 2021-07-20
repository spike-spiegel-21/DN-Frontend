import './calorie.css'

const Calmenu = () => {

    const DishCalCard = ({ dishName, cal }) => {
        return (
            <div className="dish-cal-card">
                <h2>{dishName}</h2>
                <h3>You have consumed {cal}</h3>
            </div>
        )

    }

    return (
        <div className="cal-list">
            <i>Day 17</i>
            <DishCalCard dishName="Pizza" cal="200" />
            <DishCalCard dishName="Pasta" cal="100" />
            <DishCalCard dishName="Burger" cal="50" />
            <DishCalCard dishName="Ice Cream" cal="32" />
            <DishCalCard dishName="Coffee" cal="90" />
            <DishCalCard dishName="Tacos" cal="1000" />
        </div>
    );
}

export default Calmenu;