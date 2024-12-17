'use client'
import { useState } from "react";

const MenuEditor = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, label: "Home", link: "/" },
    { id: 2, label: "Catalog", link: "/catalog" },
    { id: 3, label: "Contact", link: "/contact" },
  ]);

  const [editingItem, setEditingItem] = useState(null);
  const [newLabel, setNewLabel] = useState("");
  const [newLink, setNewLink] = useState("");

  // Function to handle edit
  const startEdit = (item) => {
    setEditingItem(item.id);
    setNewLabel(item.label);
    setNewLink(item.link);
  };

  // Function to save edit
  const saveEdit = () => {
    setMenuItems(
      menuItems.map((item) =>
        item.id === editingItem ? { ...item, label: newLabel, link: newLink } : item
      )
    );
    setEditingItem(null);
    setNewLabel("");
    setNewLink("");
  };

  // Function to delete menu item
  const deleteItem = (id) => {
    setMenuItems(menuItems.filter((item) => item.id !== id));
  };

  // Function to add new menu item
  const addItem = () => {
    if (newLabel && newLink) {
      setMenuItems([
        ...menuItems,
        { id: Date.now(), label: newLabel, link: newLink },
      ]);
      setNewLabel("");
      setNewLink("");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
      {/* Header */}
      <h1 className="text-2xl font-semibold mb-4">Main Menu</h1>

      {/* Name and Handle */}
      <div className="mb-6">
        <label className="block font-medium mb-1 text-gray-700">Name</label>
        <input
          type="text"
          defaultValue="Main menu"
          className="w-full p-2 border rounded-md"
          disabled
        />
        <span className="text-sm text-gray-500">Handle: main-menu</span>
      </div>

      {/* Menu Items */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Menu items</h2>
        <div className="space-y-4">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded-md shadow-sm relative bg-gray-50"
            >
              {/* Editable or Static State */}
              {editingItem === item.id ? (
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={newLabel}
                    onChange={(e) => setNewLabel(e.target.value)}
                    className="flex-1 p-2 border rounded-md"
                    placeholder="Label"
                  />
                  <input
                    type="text"
                    value={newLink}
                    onChange={(e) => setNewLink(e.target.value)}
                    className="flex-1 p-2 border rounded-md"
                    placeholder="Link"
                  />
                  <button
                    onClick={saveEdit}
                    className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-800">{item.label}</p>
                    <p className="text-sm text-gray-500">{item.link}</p>
                  </div>
                  <div className="space-x-2">
                    <button
                      onClick={() => startEdit(item)}
                      className="text-blue-500 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteItem(item.id)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Add New Menu Item */}
      <div className="mt-6 border-t pt-4">
        <h2 className="text-lg font-semibold mb-2">Add menu item</h2>
        <div className="flex space-x-2">
          <input
            type="text"
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
            placeholder="Label"
            className="flex-1 p-2 border rounded-md"
          />
          <input
            type="text"
            value={newLink}
            onChange={(e) => setNewLink(e.target.value)}
            placeholder="Link"
            className="flex-1 p-2 border rounded-md"
          />
          <button
            onClick={addItem}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add menu item
          </button>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end mt-6">
        <button
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md cursor-not-allowed"
          disabled
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default MenuEditor;
