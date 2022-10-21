import Error from '../components/Error';


function HOC(WrappedComponent: any) {
  function wrapper(props: any) {
    if (typeof props.rickandmortyData === "object") {
      return <WrappedComponent {...props} />;
    } else {
      return <Error />;
    }
  }
  return wrapper;
}

export default HOC;
