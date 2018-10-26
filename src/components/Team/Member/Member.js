import React,{ Component } from 'react'
import classes from './Member.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Member extends Component{

    state ={
        showSocialIcons : false
    }
    handleSocialIcons = (e) => {
        if(e.target.tagName == 'IMG'){
            this.setState({ showSocialIcons :true})
        }
    }
    hideSocialIcons = (e) =>{
        this.setState({ showSocialIcons :false})
    }

    render(){
        const{ src,alt,name,position} = this.props;
        const socialStyle = [ classes.Member__social ];
        if( this.state.showSocialIcons) {
             socialStyle.push(classes.Member__socialActive);
        }
      return (
          <div className={classes.Member}
                   onMouseLeave = { this.hideSocialIcons }>
              <img src={src} alt={alt} className={classes.Member__picture}  onMouseOver = { this.handleSocialIcons }/>
              <h4 className={classes.Member__name}>{ name }</h4>
              <p className={classes.Member__position}>{ position }</p>
              <div className={socialStyle.join(' ')}>
                  <a href='https://www.facebook.com'>
                      <FontAwesomeIcon icon={['fab', 'facebook-f']} size='xs' className={classes.Member__icons} />
                  </a>
                  <a href="https://www.twitter.com">
                      <FontAwesomeIcon icon={['fab', 'twitter']} size='xs' className={classes.Member__icons} />
                  </a>
                  <a href="https://www.linkedin.com">
                      <FontAwesomeIcon icon={['fab', 'linkedin-in']} size='xs' className={classes.Member__icons} />
                  </a>
              </div>
          </div>
      )
    }

}

export default Member
