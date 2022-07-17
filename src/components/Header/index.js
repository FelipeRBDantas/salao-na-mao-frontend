const Header = () => {
  return (
    <header className="container-fluid d-flex justify-content-end">
      <div className="d-flex align-items-center">
        <div>
          <span className="d-block m-0 p-0 text-white">Barbearia Dantas</span>
          <small className="m-0 p-0">Plano Gold</small>
        </div>
        <img src="https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg" alt="Foto de Perfil" />
        <span className="mdi mdi-chevron-down text-white"></span>
      </div>
    </header>
  );
}

export default Header;
