export default function QuestionsPage() {
    return (
        <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow p-8">
                <h1 className="text-4xl font-bold text-blue-600 mb-6">
                    Ask a Question
                </h1>

                <p className="text-gray-700 mb-6">
                    If you have any questions about the lesson,
                    homework or vocabulary, send a message here.
                </p>

                <form
                    action="PASTE_YOUR_FORMSPREE_LINK_HERE"
                    method="POST"
                    className="space-y-6"
                >
                    <div>
                        <label className="block mb-2 font-semibold">
                            Your Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full border rounded-xl p-3"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-semibold">
                            Your Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full border rounded-xl p-3"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-semibold">
                            Lesson
                        </label>

                        <select
                            name="lesson"
                            className="w-full border rounded-xl p-3"
                        >
                            <option>Lesson 1 — Talking About Yourself</option>
                            <option>Lesson 2 — Family & Home</option>
                            <option>Lesson 3 — Food & Shopping</option>
                            <option>Lesson 4 — Work & Daily Routine</option>
                            <option>Lesson 5 — Travel & Directions</option>
                            <option>Lesson 6 — Past Tense Basics</option>
                            <option>Lesson 7 — Health & Doctor</option>
                            <option>Lesson 8 — Plans & Future</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-2 font-semibold">
                            Question Type
                        </label>

                        <select
                            name="questionType"
                            className="w-full border rounded-xl p-3"
                        >
                            <option>Vocabulary</option>
                            <option>Homework</option>
                            <option>Grammar</option>
                            <option>Pronunciation</option>
                            <option>Speaking</option>
                            <option>General Question</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-2 font-semibold">
                            Your Question
                        </label>

                        <textarea
                            name="message"
                            required
                            rows={6}
                            className="w-full border rounded-xl p-3"
                            placeholder="Type your question here..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold"
                    >
                        Send Question
                    </button>
                </form>
            </div>
        </div>
    );
}