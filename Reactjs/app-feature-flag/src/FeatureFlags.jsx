import { useContext } from "react";
import { FeatureFlagsContext } from "./context";
import LightDarkMode from "../../app-light-dark-mode";
import Accordian from "../../app-accordian";
import TreeView from "../../app-tree-view";
import menus from "../../app-tree-view/src/Components/data";




export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    // {
    //   key: "showTicTacToeBoard",
    //   component: <TicTacToe />,
    // },
    // {
    //   key: "showRandomColorGenerator",
    //   component: <RandomColor />,
    // },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showTreeView",
      component: <TreeView  menus={menus} />,
    },
    // {
    //     key : 'showTabs',
    //     component : <TabTest/>
    // }
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  if (loading) return <h1>Loading data ! Please wait</h1>;

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}
