import "./authMenu.css"

const AuthMenu = () => {

    return (
      <div className="authMenu">
        <h3 className="authName">Привіт, Максим Андрійович</h3>
        <button
          className="authBtn"
          type="button"
        >
          Вийти
        </button>
      </div>
    );
  };

export default  AuthMenu