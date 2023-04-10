import React, {useEffect} from "react";
    
class HubspotContactForm extends React.Component {
    componentDidMount() {
        const script = document.createElement('script');
      script.src = 'https://js.hsforms.net/forms/v2.js';
      document.body.appendChild(script);
      
      script.addEventListener('load', () => {
          if(window.hbspt) {
            window.hbspt.forms.create({
              portalId: '25237881',
            formId: 'adcb3c4a-645b-414d-981c-6ecbcb590698',
            target: '#hubspotForm'
          })
        }
      });
    }
    
      render() {
        return (
            <div>
              <div id="hubspotForm"></div>
            </div>
      );
    }
  }
    
    export default HubspotContactForm;