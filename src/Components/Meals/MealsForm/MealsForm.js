import Input from "../../UI/Input/Input";
import classes from "./MealsForm.module.css";

const MealsForm = (props) => {
    return (
        <form className={classes.form}>
            <Input
                label="Amount"
                input={{
                    id: props.id,
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1",
                }}
            />
            <button>+Add</button>
        </form>
    );
};

export default MealsForm;
