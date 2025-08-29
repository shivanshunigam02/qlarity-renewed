
import React from 'react';

const Account = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-display mb-4">My Account</h1>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            Manage your account and order history
          </p>
        </div>
        
        <div className="glass-card p-12 text-center">
          <h2 className="text-heading mb-4 text-gradient-primary">Coming Soon</h2>
          <p className="text-muted-foreground">
            Our user account system is being built with security and convenience in mind. 
            Coming soon!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Account;
