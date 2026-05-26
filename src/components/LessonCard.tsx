type VocabularyWord = {
  english: string;
  hungarian: string;
  example: string;
};

type LessonCardProps = {
  title: string;
  memo: string;
  homework: string;
  vocab: VocabularyWord[];
};

export default function LessonCard({
  title,
  memo,
  homework,
  vocab,
}: LessonCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow p-8 space-y-8">
      <h2 className="text-3xl font-bold text-blue-600">
        {title}
      </h2>

      <div>
        <h3 className="text-2xl font-semibold mb-3">
          Lesson Memo
        </h3>

        <div className="whitespace-pre-line text-gray-700 leading-8">
          {memo}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-3">
          Homework
        </h3>

        <div className="whitespace-pre-line text-gray-700 leading-8">
          {homework}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">
          Vocabulary
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead className="bg-blue-100">
              <tr>
                <th className="border p-3 text-left">
                  English
                </th>

                <th className="border p-3 text-left">
                  Hungarian
                </th>

                <th className="border p-3 text-left">
                  Example Sentence
                </th>
              </tr>
            </thead>

            <tbody>
              {vocab.map((word, index) => (
                <tr key={index}>
                  <td className="border p-3 font-medium">
                    {word.english}
                  </td>

                  <td className="border p-3">
                    {word.hungarian}
                  </td>

                  <td className="border p-3">
                    {word.example}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}