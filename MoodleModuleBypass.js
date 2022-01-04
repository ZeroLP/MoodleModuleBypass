function bypassModuleCompletionCheck()
{
   if(SCORM_CallLMSSetValue('cmi.core.lesson_status', 'completed') && SCORM_CallLMSCommit('') && SCORM_CallLMSFinish(''))
      return true;
   else
      return false;
}

let bpStatus = bypassModuleCompletionCheck();

if(bpStatus)
   console.log("Successfully bypassed the module completion check.");
else
   console.log("Failed to bypass the module completion check.");
