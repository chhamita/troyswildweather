import React from 'react'
import axios from 'axios';

function TenDays() {
    const [ip, setIp] = React.useState();

    React.useEffect(() => {
        const fetchUserIP = async () => {
          try {
            const response = await axios.get('https://api64.ipify.org?format=json');
            const userIP = response.data.ip;
            setIp(userIP);
            console.log('User IP:', userIP);
          } catch (error) {
            console.error('Error fetching user IP:', error);
          }
        };
    
        fetchUserIP(); // Call the function to fetch user IP
      }, []); // Empty dependency array since we don't have dependencies
   
    //   const getCountryFromIP = async ( ) => {
    //     try {
    //       const response = await axios.get(`https://ipinfo.io/${ip}/json?token=YOUR_API_KEY`);
    //       return response.data.country;
    //     } catch (error) {
    //       console.error('Error fetching geolocation data:', error);
    //       return null;
    //     }
    //   };

    //   getCountryFromIP();

  return (
    <div>TenDays</div>
  )
}

export default TenDays