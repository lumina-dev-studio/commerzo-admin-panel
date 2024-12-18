'use client'

import { useState } from 'react';
import { FaBox, FaShoppingCart, FaLaptop, FaMobileAlt, FaTshirt, FaGamepad, FaHamburger, FaGift, FaCar, FaHome } from 'react-icons/fa';
import { GiClothes, GiGamepad, GiMeal, GiPresent, GiCarWheel, GiFishingPole, GiPineTree, GiHouse, GiHamburgerMenu } from 'react-icons/gi';
import { MdPhoneIphone, MdComputer } from 'react-icons/md';
import Link from 'next/link';  // <-- Import Link here

const Navigation = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [categoryName, setCategoryName] = useState('');
  const [subCategoryName, setSubCategoryName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const [selectedCategoryIcon, setSelectedCategoryIcon] = useState(<FaBox />);
  const [selectedSubCategoryIcon, setSelectedSubCategoryIcon] = useState(<FaShoppingCart />);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showCategoryIconDropdown, setShowCategoryIconDropdown] = useState(false);
  const [showSubCategoryIconDropdown, setShowSubCategoryIconDropdown] = useState(false);

  // React Icons for categories and subcategories
  const icons = [
    { icon: '', label: 'For sub Navigation' },
    { icon: <FaBox />, label: 'Box' },
    { icon: <FaShoppingCart />, label: 'Shopping Cart' },
    { icon: <FaLaptop />, label: 'Laptop' },
    { icon: <FaMobileAlt />, label: 'Smartphone' },
    { icon: <FaTshirt />, label: 'Clothing' },
    { icon: <FaGamepad />, label: 'Gaming' },
    { icon: <FaHamburger />, label: 'Food' },
    { icon: <FaGift />, label: 'Gift' },
    { icon: <FaCar />, label: 'Car' },
    { icon: <FaHome />, label: 'Home' },
    { icon: <GiClothes />, label: 'Clothing' },
    { icon: <GiGamepad />, label: 'Gaming' },
    { icon: <GiMeal />, label: 'Meal' },
    { icon: <GiPresent />, label: 'Gift' },
    { icon: <GiCarWheel />, label: 'Car' },
    { icon: <GiFishingPole />, label: 'Fishing' },
    { icon: <GiPineTree />, label: 'Tree' },
    { icon: <GiHouse />, label: 'House' },
    { icon: <GiHamburgerMenu />, label: 'Food' },
    { icon: <MdPhoneIphone />, label: 'Smartphone' },
    { icon: <MdComputer />, label: 'Computer' },
    // Add more icons as needed...
  ];

  // Handle adding categories
  const handleAddCategory = () => {
    if (!categoryName || selectedCategoryIcon === null) return;  // Ensure icon is selected

    const newCategory = {
      id: Date.now(),
      name: categoryName,
      slug: categoryName.toLowerCase().replace(/\s+/g, '-'),
      children: [],
      icon: selectedCategoryIcon,
    };

    setCategories([...categories, newCategory]);
    setCategoryName('');
    console.log('Added Category:', newCategory); // Log the added category
  };

  // Handle adding subcategories under a category
  const handleAddSubCategory = () => {
    if (!subCategoryName || selectedCategoryId === null || selectedSubCategoryIcon === null) return;  // Ensure icon and category are selected

    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === selectedCategoryId
          ? {
              ...category,
              children: [
                ...category.children,
                {
                  id: Date.now(),
                  name: subCategoryName,
                  slug: subCategoryName.toLowerCase().replace(/\s+/g, '-'),
                  icon: selectedSubCategoryIcon,
                },
              ],
            }
          : category
      )
    );
    setSubCategoryName('');
    setSelectedCategoryId(null); // Reset the selected category
    console.log('Added Subcategory:', subCategoryName); // Log the added subcategory
  };

  // Filter categories and subcategories based on the search term
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.children.some((child: any) =>
      child.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Log filtered categories
  console.log('Filtered Categories:', filteredCategories);

  // Recursive function to render categories and subcategories with nested URL
  const renderNavigation = (items: any[]) => {
    return (
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.id} className="pl-4">
            <Link href={`/${item.slug}`} className="text-lg font-semibold text-gray-800 hover:text-blue-600">
              <span className="mr-2">{item?.icon}</span>
              {item?.name}
            </Link>
            {item.children && item.children.length > 0 && (
              <div className="mt-2 ml-4">
                {/* Render subcategories with nested URLs */}
                {renderNavigation(item.children.map((child: any) => ({
                  ...child,
                  slug: `${item.slug}/${child.slug}`, // Append subcategory slug to parent slug
                })))}
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      {/* Sidebar */}
      <div className="w-[50%] mx-auto my-40">
        <button
          className="md:hidden text-xl text-gray-800 mb-6"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? 'Close Menu' : 'Open Menu'}
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">Shop Navigation</h2>

        {/* Render Categories dynamically */}
        {renderNavigation(filteredCategories)}

        {/* Add Category Form */}
        <div className="mt-6">
          <h3 className="font-semibold text-gray-800">Add Category</h3>
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="Category Name"
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          {/* Custom Icon Selector for Category */}
          <div className="mt-2">
            <label className="font-semibold text-gray-800">Select Category Icon:</label>
            <div className="relative">
              <button
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                onClick={() => setShowCategoryIconDropdown(!showCategoryIconDropdown)}
              >
                {selectedCategoryIcon} Select Icon
              </button>
              {showCategoryIconDropdown && (
                <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 overflow-scroll ">
                  {icons.map((icon, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedCategoryIcon(icon?.icon);
                        setShowCategoryIconDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 flex items-center hover:bg-gray-200"
                    >
                      <span className="mr-2 block">{icon?.icon}</span>{icon?.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button
            onClick={handleAddCategory}
            className="mt-2 w-full py-2 bg-blue-600 text-white rounded-lg"
          >
            Add Category
          </button>
        </div>

        {/* Add Subcategory Form */}
        {categories.length > 0 && (
          <div className="mt-6">
            <h3 className="font-semibold text-gray-800">Add Subcategory</h3>
            <select
              onChange={(e) => setSelectedCategoryId(Number(e.target.value))}
              value={selectedCategoryId || ''}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            {selectedCategoryId !== null && (
              <>
                <input
                  type="text"
                  value={subCategoryName}
                  onChange={(e) => setSubCategoryName(e.target.value)}
                  placeholder="Subcategory Name"
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />

                {/* Custom Icon Selector for Subcategory */}
                <div className="mt-2">
                  <label className="font-semibold text-gray-800">Select Subcategory Icon:</label>
                  <div className="relative">
                    <button
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      onClick={() => setShowSubCategoryIconDropdown(!showSubCategoryIconDropdown)}
                    >
                      {selectedSubCategoryIcon} Select Icon
                    </button>
                    {showSubCategoryIconDropdown && (
                      <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                        {icons.map((icon, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setSelectedSubCategoryIcon(icon?.icon);
                              setShowSubCategoryIconDropdown(false);
                            }}
                            className="w-full text-left px-4 py-2 hover:bg-gray-200"
                          >
                            <span className="mr-2">{icon.icon}</span>{icon.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <button
                  onClick={handleAddSubCategory}
                  className="mt-2 w-full py-2 bg-blue-600 text-white rounded-lg"
                >
                  Add Subcategory
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
