import React from 'react';
import { Clock } from 'lucide-react';

const LastUpdatedFooter = ({ lastUpdated }) => {
  return (
    <div className="bg-gray-50 border-t border-gray-200 py-3 px-6 mt-auto text-sm text-gray-500 flex items-center justify-center">
      <div className="flex items-center" title="Date of most recent content update">
        <Clock className="h-4 w-4 mr-2 text-gray-400" />
        <span>Dashboard Last Updated: {lastUpdated}</span>
      </div>
    </div>
  );
};

export default LastUpdatedFooter;