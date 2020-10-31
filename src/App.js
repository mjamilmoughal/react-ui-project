import React,{Component} from 'react';
import { withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbarctm from './Compoenets/Shared/Navbarctm'
import Footer from './Compoenets/Shared/Footer'
import AppRoutes from './AppRoutes'

export class App extends Component {
  state = {}
  componentDidMount() {
    this.onRouteChanged();
  }
  render() {
    let headerComponent = !this.state.isFullPageLayout ? <Navbarctm/> : '';
    let footerComponent = !this.state.isFullPageLayout ? <Footer/> : '';
    return (
      <div>
        {headerComponent}
          <AppRoutes ></AppRoutes>
        {footerComponent}
    </div>
    )
  }
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    debugger
    if(this.props.location.pathname === "/GetStarted"){debugger
      document.querySelector('.banner').classList.add('d-none');
      document.querySelector('.footer').classList.add('d-none');
    }
    else{
      document.querySelector('.banner').classList.remove('d-none');
      document.querySelector('.footer').classList.remove('d-none');
    }
  
  }
}



export default withRouter(App);
