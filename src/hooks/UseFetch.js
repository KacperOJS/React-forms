import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function useFetch(url,{method,headers,body}) {
  const [data, setData] = useState(null);
  const [errorStatus ,setErrorStatus]=useState();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    fetch(url,{
		method:method,
		headers: headers,
		body: body,
	})
      .then((res) => {
		if(res.status ===401){
			navigate('/login',{state:{previousUrl:location.pathname}})
		}
        if (!res.ok) {
          throw(res.status);
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setErrorStatus(error);
      });
  }, [url,headers,body,method,navigate,location]);

	return {data,errorStatus};
}
