import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Plus, Edit, Trash2, CheckCircle } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { DataTable } from '../../components/ui/DataTable';
import { mockExams, mockExamQuestions } from '../../utils/mockData';

export const ExamQuestions: React.FC = () => {
    const { examId } = useParams<{ examId: string }>();
    const exam = mockExams.find(e => e.id === Number(examId));
    const questions = mockExamQuestions.filter(q => q.exam_id === Number(examId));

    if (!exam) {
        return (
            <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-white mb-4">Exam Not Found</h2>
                <Link to="/admin/exams" className="text-gold-500 hover:text-gold-400">
                    ← Back to Exam Management
                </Link>
            </div>
        );
    }

    const columns: any[] = [
        {
            header: '#',
            cell: (_: any, index: number) => (
                <span className="text-slate-400">{index + 1}</span>
            )
        },
        {
            header: 'Question',
            cell: (question: typeof mockExamQuestions[0]) => (
                <div className="max-w-md">
                    <p className="text-white font-medium">{question.question_text}</p>
                    <div className="mt-2 space-y-1 text-xs">
                        <div className="text-slate-400">
                            A. {question.option_a}
                        </div>
                        <div className="text-slate-400">
                            B. {question.option_b}
                        </div>
                        <div className="text-slate-400">
                            C. {question.option_c}
                        </div>
                        <div className="text-slate-400">
                            D. {question.option_d}
                        </div>
                    </div>
                </div>
            )
        },
        {
            header: 'Correct Answer',
            cell: (question: typeof mockExamQuestions[0]) => (
                <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-green-500 font-bold uppercase">
                        {question.correct_answer}
                    </span>
                </div>
            )
        },
        {
            header: 'Points',
            cell: (question: typeof mockExamQuestions[0]) => (
                <span className="text-slate-300">{question.points}</span>
            )
        },
        {
            header: 'Actions',
            cell: () => (
                <div className="flex items-center space-x-2">
                    <button
                        className="p-2 hover:bg-navy-700 rounded-lg transition-colors"
                        title="Edit Question"
                    >
                        <Edit className="w-4 h-4 text-gold-500" />
                    </button>
                    <button
                        className="p-2 hover:bg-navy-700 rounded-lg transition-colors"
                        title="Delete Question"
                    >
                        <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                </div>
            )
        }
    ];

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Link
                to="/admin/exams"
                className="inline-flex items-center text-gold-500 hover:text-gold-400 transition-colors"
            >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Exam Management
            </Link>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white">{exam.title}</h1>
                    <p className="text-slate-400">{exam.description}</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-slate-500">
                        <span>Rank: {exam.rank_required}</span>
                        <span>•</span>
                        <span>Duration: {exam.duration_minutes} mins</span>
                        <span>•</span>
                        <span>Pass Score: {exam.pass_score}%</span>
                    </div>
                </div>
                <Button>
                    <Plus className="w-5 h-5 mr-2" />
                    Add Question
                </Button>
            </div>

            <Card>
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">
                        Exam Questions
                    </h3>
                    <div className="text-sm text-slate-400">
                        {questions.length} of {exam.questions_count} questions
                    </div>
                </div>

                {questions.length > 0 ? (
                    <DataTable
                        data={questions}
                        columns={columns}
                    />
                ) : (
                    <div className="text-center py-12">
                        <p className="text-slate-400 mb-4">No questions added yet</p>
                        <Button variant="outline">
                            <Plus className="w-4 h-4 mr-2" />
                            Add First Question
                        </Button>
                    </div>
                )}
            </Card>
        </div>
    );
};
