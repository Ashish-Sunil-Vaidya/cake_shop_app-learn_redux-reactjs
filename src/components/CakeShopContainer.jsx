
import { buyCake } from "../redux";
import {connect} from 'react-redux';

import PropTypes from 'prop-types';

function CakeShopContainer(props) {
  return (
    <div>
      <h1>No. of Cakes: {props.noOfCakes}</h1>
      <button onClick={props.buyCake}>Buy Cakes</button>
    </div>
  );
}

CakeShopContainer.propTypes = {
  noOfCakes: PropTypes.number.isRequired,
  buyCake: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    noOfCakes: state.noOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};



export default connect(mapStateToProps,mapDispatchToProps)(CakeShopContainer);
