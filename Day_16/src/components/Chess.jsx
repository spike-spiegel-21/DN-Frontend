const Chess = () => {
    const Small = () => {
        return (
            <div className="sm"></div>
        );
    }

    const Sw = () => {
        return (
            <div className="sw">
                <Small />
                <Small />
                <Small />
                <Small />
                <Small />
                <Small />
                <Small />
                <Small />
            </div>
        );
    }

    const Sb = () => {
        return (
            <div className="sb">
                <Small />
                <Small />
                <Small />
                <Small />
                <Small />
                <Small />
                <Small />
                <Small />
            </div>
        );
    }

    return (
        <div className="adjust">
            <div>
                <i>Day 16</i>
            </div>
            <div className="board">
                <Sw />
                <Sb />
                <Sw />
                <Sb />
                <Sw />
                <Sb />
                <Sw />
                <Sb />
            </div>
        </div>
    );


}

export default Chess;