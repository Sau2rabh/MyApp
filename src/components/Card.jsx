import Button from "./Button";

function Card({ title = "Default Title", buttonText = "check it out", imageUrl = "https://images.unsplash.com/photo-1509042239860-f550ce710b93"}) {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow overflow-hidden transition-shadow">
          <img
            className="w-full h-48 object-cover"
            src={imageUrl}
            alt="Sample Image"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">{title}</h2> 
            <p className="mt-2 text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
            </p>
            <Button />
          </div>
        </div>
    );
}

export default Card;