import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import type { InferenceByIdRow } from "~/utils/clickhouse/inference";
import { formatDate } from "~/utils/date";

export default function VariantInferenceTable({
  inferences,
}: {
  inferences: InferenceByIdRow[];
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Episode ID</TableHead>
          <TableHead>Time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {inferences.map((inference) => (
          <TableRow key={inference.id} id={inference.id}>
            <TableCell className="max-w-[200px]">
              <a
                href={`/observability/inferences/${inference.id}`}
                className="block no-underline"
              >
                <code className="block overflow-hidden text-ellipsis whitespace-nowrap rounded font-mono transition-colors duration-300 hover:text-gray-500">
                  {inference.id}
                </code>
              </a>
            </TableCell>
            <TableCell>
              <a
                href={`/observability/episodes/${inference.episode_id}`}
                className="block no-underline"
              >
                <code className="block overflow-hidden text-ellipsis whitespace-nowrap rounded font-mono transition-colors duration-300 hover:text-gray-500">
                  {inference.episode_id}
                </code>
              </a>
            </TableCell>
            <TableCell>{formatDate(new Date(inference.timestamp))}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
