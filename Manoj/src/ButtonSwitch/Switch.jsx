import React, { useState } from 'react';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(1); // Default to Tab 1

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleTabClick(1)}>Tab 1</button>
        <button onClick={() => handleTabClick(2)}>Tab 2</button>
      </div>

      <div>
        {activeTab === 1 && <div>This is Tab 1 Content</div>}
        {activeTab === 2 && <div>This is Tab 2 Content</div>}
      </div>
    </div>
  );
};

export default TabComponent;
