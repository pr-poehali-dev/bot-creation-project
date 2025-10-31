import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

interface Note {
  id: string;
  title: string;
  content: string;
  date: string;
}

const Notes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const savedNotes = localStorage.getItem("english-notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  const saveNotes = (newNotes: Note[]) => {
    setNotes(newNotes);
    localStorage.setItem("english-notes", JSON.stringify(newNotes));
  };

  const addNote = () => {
    if (!title.trim() || !content.trim()) {
      toast({
        title: "Заполните поля",
        description: "Название и содержание не могут быть пустыми",
        variant: "destructive",
      });
      return;
    }

    if (editingId) {
      const updatedNotes = notes.map((note) =>
        note.id === editingId
          ? { ...note, title, content, date: new Date().toLocaleDateString() }
          : note
      );
      saveNotes(updatedNotes);
      setEditingId(null);
      toast({
        title: "Заметка обновлена",
        description: "Изменения сохранены",
      });
    } else {
      const newNote: Note = {
        id: Date.now().toString(),
        title,
        content,
        date: new Date().toLocaleDateString(),
      };
      saveNotes([...notes, newNote]);
      toast({
        title: "Заметка добавлена",
        description: "Новая заметка создана",
      });
    }

    setTitle("");
    setContent("");
  };

  const editNote = (note: Note) => {
    setTitle(note.title);
    setContent(note.content);
    setEditingId(note.id);
  };

  const deleteNote = (id: string) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    saveNotes(updatedNotes);
    toast({
      title: "Заметка удалена",
      description: "Заметка успешно удалена",
    });
  };

  const cancelEdit = () => {
    setTitle("");
    setContent("");
    setEditingId(null);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="StickyNote" size={24} />
            {editingId ? "Редактировать заметку" : "Новая заметка"}
          </CardTitle>
          <CardDescription>
            Создавайте заметки для изучения английского языка
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Название заметки..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Содержание заметки..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={5}
          />
          <div className="flex gap-2">
            <Button onClick={addNote} className="flex-1">
              <Icon name={editingId ? "Check" : "Plus"} size={18} className="mr-2" />
              {editingId ? "Сохранить изменения" : "Добавить заметку"}
            </Button>
            {editingId && (
              <Button onClick={cancelEdit} variant="outline">
                <Icon name="X" size={18} className="mr-2" />
                Отмена
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.length === 0 ? (
          <Card className="col-span-full">
            <CardContent className="py-12 text-center">
              <Icon name="StickyNote" size={48} className="mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">
                У вас пока нет заметок. Создайте первую заметку!
              </p>
            </CardContent>
          </Card>
        ) : (
          notes.map((note) => (
            <Card key={note.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg">{note.title}</CardTitle>
                <CardDescription>{note.date}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm whitespace-pre-wrap">{note.content}</p>
              </CardContent>
              <CardContent className="pt-0">
                <div className="flex gap-2">
                  <Button
                    onClick={() => editNote(note)}
                    variant="outline"
                    size="sm"
                    className="flex-1"
                  >
                    <Icon name="Edit" size={16} className="mr-1" />
                    Редактировать
                  </Button>
                  <Button
                    onClick={() => deleteNote(note.id)}
                    variant="destructive"
                    size="sm"
                    className="flex-1"
                  >
                    <Icon name="Trash2" size={16} className="mr-1" />
                    Удалить
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default Notes;
