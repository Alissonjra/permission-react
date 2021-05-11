import PermissionComponent from "../../components/PermissionComponent";

// import { Container } from './styles';

export function Dashboard () {
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        <PermissionComponent role="ROLE_ADMIN">
          <li>
            <a href="/product">Cadastro de produto</a>
          </li>
        </PermissionComponent>
        <li>
          <a href="/list">Listagem de produto</a>
        </li>
      </ul>
    </div>
  );
};
