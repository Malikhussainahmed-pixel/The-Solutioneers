import React from 'react';

export default function Developmenthub() {
  return (
    <section className="mt-24 bg-gradient-to-b from-orange-50 to-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Top Heading + Subheading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
             <span className="text-orange-500">Development Hub</span>
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Our offshore development hub in Pakistan enables us to deliver world-class software solutions efficiently and cost-effectively.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="mt-10 grid md:grid-cols-2 gap-10 ">
          
          {/* Left Image */}
          <div>
            <img
              src="/images/development.jpg"
              alt="Development Hub"
              className="rounded-xl object-cover w-full h-full shadow-lg"
            />
          </div>

          {/* Right Paragraph */}
          <div>
            <p className="text-gray-700 leading-relaxed sm:pt-10">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum eaque, incidunt accusantium ducimus neque reiciendis! Voluptatum voluptatem corporis ratione, placeat tempora praesentium quam molestiae enim deleniti suscipit assumenda! Unde, in. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus tenetur aut consequuntur illo quidem vero nostrum accusantium fugit deleniti enim atque, molestias quam voluptatum ipsum velit quos, tempora adipisci? Hic!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
