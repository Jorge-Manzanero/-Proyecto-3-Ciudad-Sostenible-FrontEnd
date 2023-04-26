export const Resuelto = ({ resuelto }) => {
  if (resuelto === 1) {
    return <div className="resuelto">Resuelto</div>;
  } else {
    return <div className="pendiente">Pendiente</div>;
  }
};
