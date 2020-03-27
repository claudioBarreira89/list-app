import { connect } from "react-redux";
import ListWrapper from "../components/ListWrapper";
import { fetchData, setSearchQuery } from "../store/actions";
import { IInitialSate } from "../store/types";

const mapStateToProps = (state: IInitialSate) => ({
    list: state.data,
    currentPage: state.currentPage,
    numberOfPages: state.numberOfPages
});

const mapDispatchToProps = {
    fetchData,
    setSearchQuery
};

export default connect(mapStateToProps, mapDispatchToProps)(ListWrapper);
