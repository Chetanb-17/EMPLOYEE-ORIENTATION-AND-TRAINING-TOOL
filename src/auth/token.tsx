const useAuth = () => {
    const getToken = async () => {
      // Replace this with your actual login/token fetch API
      const token = sessionStorage.getItem("token");
      return token;
    };
  
    return { getToken };
  };
  
  export default useAuth;
  