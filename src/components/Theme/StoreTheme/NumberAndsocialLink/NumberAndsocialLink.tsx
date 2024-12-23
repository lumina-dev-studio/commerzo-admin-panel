'use client';

import { useState } from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaGlobe } from 'react-icons/fa';
import { toast } from 'sonner';
import { useCreateNumberMutation, useGetNumberQuery } from '@/Redux/api/Theme/StoreTheme/numberApi';
import { useCreateSocialMutation } from '@/Redux/api/Theme/StoreTheme/socialApi';

const emojiOptions = [
  { icon: <FaTwitter />, label: 'Twitter' },
  { icon: <FaFacebook />, label: 'Facebook' },
  { icon: <FaInstagram />, label: 'Instagram' },
  { icon: <FaLinkedin />, label: 'LinkedIn' },
  { icon: <FaYoutube />, label: 'YouTube' },
  { icon: <FaGlobe />, label: 'Other' },
];

interface SocialAccount {
  account: string;
  emoji: string;  // Ensure emoji is a string
}

const NumberAndSocialLink: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>(''); // Only one phone number
  const [socialAccounts, setSocialAccounts] = useState<SocialAccount[]>([]); // Array of social accounts
  const [phoneInput, setPhoneInput] = useState<string>('');
  const [socialInput, setSocialInput] = useState<string>('');
  const [selectedEmoji, setSelectedEmoji] = useState(emojiOptions[0]);
  const [submitVisible, setSubmitVisible] = useState(false);

  const [updateNumber] = useCreateNumberMutation();
  const [updateSocial] = useCreateSocialMutation();
  const { data: numberData, refetch: numberRefetch } = useGetNumberQuery('');

  console.log(numberData?.data?.number, 'kkk');

  // Function to add phone number to the state and send to the server
  const addPhoneNumber = async () => {
    if (!phoneInput.trim()) {
      toast.error('Phone number cannot be empty.');
      return;
    }

    console.log({ number: phoneInput, id: numberData?.data?.id });

    try {
      // Use `phoneInput` for sending data to the server
      await updateNumber({ number: phoneInput, id: numberData?.data?.id }).unwrap();

      // Update the local state
      setPhoneNumber(phoneInput);

      // Notify user and reset the input field
      toast.success('Phone number updated successfully!');
      setPhoneInput('');
      numberRefetch(); // Refetch data to sync with the server
    } catch (error) {
      console.error('Error updating phone number:', error);
      toast.error('Failed to update phone number. Please try again.');
    }
  };

  // Function to add social account to the state
  const addSocialAccount = () => {
    if (socialInput.trim() === '') return;

    // Save the emoji label (not the object) and account to the state
    setSocialAccounts([
      ...socialAccounts,
      { account: socialInput, emoji: selectedEmoji.label }
    ]);
    setSocialInput('');
    setSelectedEmoji(emojiOptions[0]); // Reset emoji
    setSubmitVisible(true); // Show submit button once something is added
  };

  // Function to submit all social accounts to the backend
  const handleSubmit = async () => {
    try {
      // Send the array of social accounts to the server using Redux mutation
      for (const account of socialAccounts) {
        await updateSocial({ account: `account.account`, emoji: `account.emoji` }).unwrap();
      }

      toast.success('Social accounts saved successfully!');
      setSubmitVisible(false); // Hide submit button after submission
    } catch (error) {
      toast.error('Failed to save social accounts. Please try again.');
    }
  };

  return (
    <div className="p-10 w-full mt-40 mx-auto bg-gray-50 rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Number and Social Link Manager</h1>

      {/* Phone Number Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Add Phone Number</h2>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={phoneInput}
            onChange={(e) => setPhoneInput(e.target.value)}
            placeholder={numberData?.data?.number}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addPhoneNumber}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Add
          </button>
        </div>
      </div>

      {/* Social Account Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Add Social Media Account</h2>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={socialInput}
            onChange={(e) => setSocialInput(e.target.value)}
            placeholder="Enter account name or link"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <select
            value={selectedEmoji.label}
            onChange={(e) =>
              setSelectedEmoji(emojiOptions.find((option) => option.label === e.target.value)!)
            }
            className="p-2 border border-gray-300 rounded focus:outline-none"
          >
            {emojiOptions.map((option, index) => (
              <option key={index} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
          <button
            onClick={addSocialAccount}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            Add
          </button>
        </div>
      </div>

      {/* Display Phone Numbers */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Phone Number</h2>
        <p className="text-gray-600">{phoneNumber || 'No phone number added yet'}</p>
      </div>

      {/* Display Social Accounts */}
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Social Accounts</h2>
        <ul className="space-y-2">
          {socialAccounts.map((item, index) => (
            <li key={index} className="flex items-center space-x-2 text-gray-600">
              <span className="text-lg">{item.emoji}</span>
              <a
                href={item.account}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-600"
              >
                {item.account}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Submit Button Section */}
      {submitVisible && (
        <div className="mt-6">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default NumberAndSocialLink;
