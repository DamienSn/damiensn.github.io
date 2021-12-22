<button><slot/></button>

<style type="scss">
    button {
        outline: none;
        background: transparent;
        padding: 10px 20px;
        border: solid 2px white;
        color: white;
        border-radius: 42.5px;
        font-weight: bold;
        cursor: pointer;
        transition: 0.2s linear;
    }

    button:hover {
        background-color: white;
        color: black;
    }
</style>