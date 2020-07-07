
export const processResponse = async (response , history) => {
    const statusCode = response.status;
    let res;

    console.log(history);

    if (statusCode === 500 || statusCode === 400 || statusCode === 401) {
        if (statusCode === 400 || statusCode === 401 ||  statusCode === 403) {

            if(history !== undefined) {
                localStorage.removeItem("authToken");
                history.replace("/");
            } 
        
            res = {
                status: statusCode,
                response: {
                    hasError: true,
                    errorMessage:"Something went wrong",
                }
            }
                            
            
        }else {
            
                const data = response.json();
                await Promise.all([statusCode, data]).then((response) => {
                    res = {
                        statusCode: 500,
                        response: {
                            hasError: true,
                            errorMessage:response.length > 0 ?  response[1].errorMessage : "Unauthorized Request " ,
                        }
                    }
                });
        }
    }
    else {  
        
            const data = response.json();
            res = await Promise.all([statusCode, data]).then(res => ({
                status: res[0],
                response: res[1],
            }));
    }

    return res;
};