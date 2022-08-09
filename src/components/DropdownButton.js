function DropdownButton(props) {
    var content = props.content;
    var handleClick = props.onClick;

    return (
        <div className="text-white bg-green rounded-md p-5 w-full">
            <div>
                { content }
            </div>
        </div>
    )
}

export {DropdownButton}