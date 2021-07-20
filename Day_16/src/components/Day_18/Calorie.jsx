import './calorie.css'

const Calmenu = () => {

    const DishCalCard = ({ dishName, cal }) => {
        return (
            <div style={{ backgroundColor: (cal > 50 ? 'red' : 'blurrywood') }} className="dish-cal-card">
                <h2>{dishName}</h2>
                <h3>You have consumed {cal}</h3>
            </div>
        )

    }

    var json = [{
        "dishName": "Pizza",
        "cal": 200
    },
    {
        "dishName": "Pasta",
        "cal": 100
    },
    {
        "dishName": "Burger",
        "cal": 50
    },
    {
        "dishName": "Ice Cream",
        "cal": 32
    },
    {
        "dishName": "Cofee",
        "cal": 90
    },
    {
        "dishName": "Tacos",
        "cal": 100
    },
    {
        "dishName": "Burger",
        "cal": 500
    }

    ];
    json.sort(function (a, b) {
        return (b.cal - a.cal);
    });

    return (
        <div className="cal-list">
            <i>Day 18 Conditional Rendering</i>
            {json.map(item =>
                <DishCalCard dishName={item.dishName} cal={item.cal} />
            )}
        </div>
    );
}

export default Calmenu;