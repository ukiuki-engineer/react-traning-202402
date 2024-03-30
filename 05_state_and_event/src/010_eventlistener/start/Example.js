const Example = () => {
    const onClickButton = () => {
        alert("ボタンがクリックされました。");
    };
    return (
        <>
            <button onClick={onClickButton}>クリックしてね</button>
        </>
    );
};

export default Example;
