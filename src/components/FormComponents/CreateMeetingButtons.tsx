import { EuiButton, EuiFlexGroup, EuiFlexItem } from "@elastic/eui";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function CreateMeetingButtons({
  createMeeting,
  isEdit,
  closeFlyout,
}: {
  createMeeting: () => void;
  isEdit?: boolean;
  closeFlyout?: () => {};
}) {
  const navigate = useNavigate();
  return (
    <EuiFlexGroup>
      <EuiFlexItem grow={false}>
        <EuiButton
          color="danger"
          fill
          onClick={() => (isEdit ? closeFlyout!() : navigate("/"))}
        >
          Cancel
        </EuiButton>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiButton fill onClick={createMeeting}>
          {isEdit ? "Edit Meeting" : "Create Metting"}
        </EuiButton>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
}
