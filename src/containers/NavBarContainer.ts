import { connect } from "react-redux";
import NavBar from "../components/NavBar";
import { fetchData, setCategory } from "../store/actions";
import { IInitialSate } from "../store/types";

const mapStateToProps = (state: IInitialSate) => ({
    category: state.category
});

const mapDispatchToProps = {
    fetchData,
    setCategory
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
