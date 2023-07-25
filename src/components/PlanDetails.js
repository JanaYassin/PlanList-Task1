import React from 'react';
import './PlanDetails.css'; 
const PlanDetails = ({ selectedPlan, isMonthlyPlan }) => {
  const planDetails = {
    1: {
      details: 'Details of Plan 1',
      Plan: {
        allLimitedLinks: true,
        ownAnalyticPlatform: true,
        chatSupport: false,
        optimizeHashtag: false,
        unlimitedUser: false,
      },
    },
    2: {
      details: 'Details of Plan 2',
      Plan: {
        allLimitedLinks: true,
        ownAnalyticPlatform: true,
        chatSupport: true,
        optimizeHashtag: false,
        unlimitedUser: false,
      },
    },
    3: {
      details: 'Details of Plan 3',
      Plan: {
        allLimitedLinks: true,
        ownAnalyticPlatform: true,
        chatSupport: true,
        optimizeHashtag: true,
        unlimitedUser: false,
      },
    },
    4: {
      details: 'Details of Plan 4',
      Plan: {
        allLimitedLinks: true,
        ownAnalyticPlatform: true,
        chatSupport: true,
        optimizeHashtag: true,
        unlimitedUser: true,
      },
    },
  };

  const handlePlanChange = (field) => {
    const updatedPlan = {
      ...planDetails[selectedPlan].Plan,
      [field]: !planDetails[selectedPlan].Plan[field],
    };
    const updatedPlanDetails = {
      ...planDetails[selectedPlan],
      Plan: updatedPlan,
    };
    planDetails[selectedPlan] = updatedPlanDetails;
    console.log(planDetails);
  };

  if (isMonthlyPlan) {
    return null; 
  }

  return (
    <form className="form">
      <table className="plan-details-table">
        <tr>
          <th colSpan="2">
          <span style={{ marginLeft: '-10%' }}>Details</span>
            <span style={{ fontWeight: 'bold', fontSize: '25px',marginLeft: '10%' }}>Fuse Plan</span>
          </th>
        </tr>
        <tr>
          <td>All Limited Links</td>
          <td>
            <input
              type="radio"
              id="allLimitedLinks"
              checked={planDetails[selectedPlan]?.Plan.allLimitedLinks}
              onChange={() => handlePlanChange('allLimitedLinks')}
            />
            <label htmlFor="allLimitedLinks"></label>
          </td>
        </tr>
        <tr>
          <td>Own Analytic Platform</td>
          <td>
            <input
              type="radio"
              id="ownAnalyticPlatform"
              checked={planDetails[selectedPlan]?.Plan.ownAnalyticPlatform}
              onChange={() => handlePlanChange('ownAnalyticPlatform')}
            />
            <label htmlFor="ownAnalyticPlatform"></label>
          </td>
        </tr>
        <tr>
          <td>Chat Support</td>
          <td>
            <input
              type="radio"
              id="chatSupport"
              checked={planDetails[selectedPlan]?.Plan.chatSupport}
              onChange={() => handlePlanChange('chatSupport')}
            />
            <label htmlFor="chatSupport"></label>
          </td>
        </tr>
        <tr>
          <td>Optimize Hashtag</td>
          <td>
            <input
              type="radio"
              id="optimizeHashtag"
              checked={planDetails[selectedPlan]?.Plan.optimizeHashtag}
              onChange={() => handlePlanChange('optimizeHashtag')}
            />
            <label htmlFor="optimizeHashtag"></label>
          </td>
        </tr>
        <tr>
          <td>Unlimited User</td>
          <td>
            <input
              type="radio"
              id="unlimitedUser"
              checked={planDetails[selectedPlan]?.Plan.unlimitedUser}
              onChange={() => handlePlanChange('unlimitedUser')}
            />
            <label htmlFor="unlimitedUser"></label>
          </td>
        </tr>
      </table>
    </form>
  );
};

export default PlanDetails;
