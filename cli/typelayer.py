import enum
import uuid

class CloudConductorEnum(enum.Enum):
    def __repr__(self):
        cls_name = self.__class__.__name__
        return f'{cls_name}.{self.name}'

class ProviderType(CloudConductorEnum):
    AWS = enum.auto()
    GCP = enum.auto()

class HardwareType(CloudConductorEnum):
    CPU = enum.auto()
    GPU = enum.auto()
    TPU = enum.auto()
    
class StageType(CloudConductorEnum):
    RUN_CHECKS = enum.auto()
    PREPROCESSING = enum.auto()
    TRAINING = enum.auto()
    DATA_TRANSFER = enum.auto()

class StageProgress(CloudConductorEnum):
    IDLE = enum.auto()
    RUNNING = enum.auto()
    COMPLETED = enum.auto()
    FINISHED = enum.auto() # confirmation that all necessary data has been processed

class Stage:
    def __init__(
        self, 
        pipeline_name, 
        index,
        hardware, 
        type, 
        script_path, 
        src_data_path, 
        dst_data_path,
        region=None, 
        provider=None
    ):
        self.pipeline_name = pipeline_name
        self.idx = index
        self.hardware = hardware
        self.type = type
        self.script = script_path
        self.src_data_path = src_data_path # TODO: currently hardcoded to a location on disk, can later pull for an S3 or GCP bucket
        self.dst_data_path = dst_data_path # TODO: will have to figure out how this works
        self.location_constraint = region
        self.provider_constraint = provider
        self.status = StageProgress.IDLE
    
class Pipeline:
    def __init__(self, num_stages: int, name: str, create_time: str):
        self.num_stages = num_stages
        self.stages = []
        self.name = name
        self.create_time = create_time
        self.uuid = uuid.uuid4()

    def transform(self):
        return [self.name, str(self.num_stages), self.create_time, self.uuid]

    def add_stage(self, stage):
        self.stages.append(stage)

    def remove_stage(self, stage_name):
        for stage in self.stages:
            if stage.name == stage_name:
                # TODO: add some better logic here for ensuring location transfer is good
                self.stages.remove(stage)

    def execute(self):
        for i, _ in enumerate(self.stages):   
            stage = self.stages[i]
            stage.run()
            assert stage.status == StageProgress.FINISHED

    def save_pipeline(self):
        pass
