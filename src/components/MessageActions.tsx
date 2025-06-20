
import { useState } from "react";
import { ThumbsUp, ThumbsDown, FileText, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface MessageActionsProps {
  messageId: string;
  references?: string[];
  feedback?: 'up' | 'down' | null;
  onFeedback: (messageId: string, feedback: 'up' | 'down') => void;
}

const MessageActions = ({ messageId, references = [], feedback, onFeedback }: MessageActionsProps) => {
  const [reportOpen, setReportOpen] = useState(false);

  const handleThumbsUp = () => {
    onFeedback(messageId, 'up');
  };

  const handleThumbsDown = () => {
    onFeedback(messageId, 'down');
  };

  return (
    <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-100">
      {/* Referências */}
      {references.length > 0 && (
        <Popover>
          <PopoverTrigger asChild>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 px-3 text-xs text-gray-600 hover:text-bn-primary hover:bg-bn-primary/5"
            >
              <FileText size={14} className="mr-1" />
              Referências
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-2">
              <h4 className="font-medium text-sm text-gray-800">Normativos de referência:</h4>
              <ul className="space-y-1">
                {references.map((ref, index) => (
                  <li key={index} className="text-xs text-gray-600 bg-gray-50 rounded px-2 py-1">
                    {ref}
                  </li>
                ))}
              </ul>
            </div>
          </PopoverContent>
        </Popover>
      )}

      {/* Reportar Problema */}
      <Dialog open={reportOpen} onOpenChange={setReportOpen}>
        <DialogTrigger asChild>
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 px-3 text-xs text-gray-600 hover:text-orange-600 hover:bg-orange-50"
          >
            <AlertTriangle size={14} className="mr-1" />
            Reportar problema
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Reportar problema</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              Encontrou algo incorreto ou inadequado nesta resposta? Nos ajude a melhorar!
            </p>
            <textarea
              className="w-full min-h-[100px] p-3 border border-gray-200 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-bn-primary focus:border-transparent"
              placeholder="Descreva o problema encontrado..."
            />
            <div className="flex justify-end gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setReportOpen(false)}
              >
                Cancelar
              </Button>
              <Button 
                size="sm" 
                className="bg-bn-primary hover:bg-bn-secondary"
                onClick={() => {
                  // Here you would handle the report submission
                  console.log('Problem reported for message:', messageId);
                  setReportOpen(false);
                }}
              >
                Enviar
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Feedback Buttons */}
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="sm"
          className={`h-8 w-8 p-0 ${
            feedback === 'up' 
              ? 'text-green-600 bg-green-50 hover:bg-green-100' 
              : 'text-gray-400 hover:text-green-600 hover:bg-green-50'
          }`}
          onClick={handleThumbsUp}
        >
          <ThumbsUp size={14} />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className={`h-8 w-8 p-0 ${
            feedback === 'down' 
              ? 'text-red-600 bg-red-50 hover:bg-red-100' 
              : 'text-gray-400 hover:text-red-600 hover:bg-red-50'
          }`}
          onClick={handleThumbsDown}
        >
          <ThumbsDown size={14} />
        </Button>
      </div>
    </div>
  );
};

export default MessageActions;
