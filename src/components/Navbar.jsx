import { Menu } from "antd";
import { Link } from "react-router-dom";

export default function NavBar() {
  const items = [
    {
      label: (
        <Link to={"/"}>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAOVBMVEVHcEwcHBocHBocHBocHBocHBocHBocHBocHBocHBocHBocHBocHBocHBocHBocHBocHBocHBocHBo3AVfqAAAAE3RSTlMAJWKr6f+5OPYJnNhvTMlBhhZTsdwRzwAAAVRJREFUeAFlkweWgzAMROUy7nHh/oddZBGLl/2paAarPUgx1nnc+GAN/SeGhEMK8UfOZcdrKCXU7SyZXpgKxjxXjS/rK0+EQIePB3DSmAR4MRxy0BNzB5xVQxxMdkCVOibQSQ0NTCXqwHwSpKUG0TuffAucpACWjuEj+iLasXL7PBIdw5DzF20SfObQPAbuB5xRmMCQLzFca+v+q8vNDmmJoWXZla5hJTjq8FJQyx3MIMWjU0Xd3U0K//QtdjGsR/+Y9WMI3MqNA2MX+nqnCFRkXBeYtjwQ6LXFQg2w3zlM6oA6+K7Grv4YyneShYSwN975mw2OTqopGWRpIlmELNtWh5PsuQIX2ZrPApi2FyvBCKQYRVfHJyZgnEgapMgjkJ5EkoyzKQE47aqjj/eIbxwpUruf9yaWuaZ/ynxjOph0A6Yb+mW4hIfkNN2bPOwsZdqRSfkDuugPcWQZSXsAAAAASUVORK5CYII="
            alt="KYC HUB"
          />
        </Link>
      ),
      key: "image",
    },
    {
      label: "👤",
      key: "picture",
    },
    {
      label: "About us",
      key: "About",
    },
  ];
  return <Menu mode="horizontal" items={items} />;
}
