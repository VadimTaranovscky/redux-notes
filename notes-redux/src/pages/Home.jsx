import React, { useEffect } from "react";
import Form from "../components/Form";
import ListNotes from "../components/ListNotes";
import Alert from "../components/Alert";
import Loader from "../components/Loader";
import { connect } from "react-redux";
import { loadNotes, remove } from "../redux/actionsCreators";

const Home = ({ notes, loading, loadAllNotes, removeNote }) => {
  useEffect(() => {
    loadAllNotes();
  }, []);
  return (
    <main>
      <Alert />
      <Form />
      <hr />
      {loading ? (
        <Loader />
      ) : (
        <ListNotes notes={notes} removeNote={removeNote} />
      )}
    </main>
  );
};

const mapStateToProps = (state) => ({
  notes: state.firebase.notes,
  loading: state.firebase.loading,
});

const mapDispatchToProps = (dispatch) => ({
  loadAllNotes: () => dispatch(loadNotes()),
  removeNote: (id) => dispatch(remove(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
